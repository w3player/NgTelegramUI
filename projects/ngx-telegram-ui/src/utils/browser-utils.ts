import { UAParser } from 'ua-parser-js';

export enum Platform {
  Unknown = 'Unknown',
  iOS = 'iOS',
  macOS = 'macOS',
  Android = 'Android',
  Windows = 'Windows',
}

export function getPlatform(userAgent?: string): Platform {
  const parser = new UAParser(userAgent);
  const result = parser.getResult();
  const osName = result.os.name?.toLowerCase() || '';

  if (osName.includes('mac')) {
    return Platform.macOS;
  } else if (osName.includes('ios')) {
    return Platform.iOS;
  } else if (osName.includes('android')) {
    return Platform.Android;
  } else if (osName.includes('windows')) {
    return Platform.Windows;
  }

  return Platform.Unknown;
}
