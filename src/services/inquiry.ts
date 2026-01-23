import { post } from '@/lib/api';
import axios from 'axios';
import DOMPurify from 'dompurify';

export interface InquiryPayload {
  full_name: string;
  email: string;
  interest: string;
  message?: string;
  ip_addr?: string;
  platform?: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  id?: string;
}

const getPlatformInfo = (): string => {
  const ua = navigator.userAgent;
  let browser = 'Unknown Browser';
  let device = 'Web';

  // Detect Device
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
    device = 'Mobile';
  }

  // Detect Browser
  if (ua.indexOf("Firefox") > -1) {
    browser = "Firefox";
  } else if (ua.indexOf("SamsungBrowser") > -1) {
    browser = "Samsung Internet";
  } else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) {
    browser = "Opera";
  } else if (ua.indexOf("Trident") > -1) {
    browser = "Internet Explorer";
  } else if (ua.indexOf("Edge") > -1 || ua.indexOf("Edg") > -1) {
    browser = "Edge";
  } else if (ua.indexOf("Chrome") > -1) {
    browser = "Chrome";
  } else if (ua.indexOf("Safari") > -1) {
    browser = "Safari";
  }

  return `${device} - ${browser}`;
};

export const inquiryService = {
  submit: async (payload: InquiryPayload) => {
    // Sanitize inputs
    const sanitizedPayload = {
      ...payload,
      full_name: DOMPurify.sanitize(payload.full_name),
      email: DOMPurify.sanitize(payload.email),
      interest: DOMPurify.sanitize(payload.interest),
      message: payload.message ? DOMPurify.sanitize(payload.message) : undefined
    };

    let ip_addr = 'unknown';
    const platform = getPlatformInfo();

    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      ip_addr = response.data.ip;
    } catch (error) {
      console.warn('Failed to fetch IP address:', error);
    }

    const enrichedPayload = {
      ...sanitizedPayload,
      ip_addr,
      platform,
    };

    return post<InquiryResponse>('/inquiry', enrichedPayload);
  }
};
