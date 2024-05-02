import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.tesladistributor.app',
  appName: 'Tesla Distributor',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
