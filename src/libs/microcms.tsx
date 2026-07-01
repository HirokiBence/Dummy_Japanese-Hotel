import { createClient } from "microcms-js-sdk";

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されてない場合はエラーを投げる
if(!process.env.MICROCMS_SERVICE_DOMAIN){
 throw new Error('MICROCMS_SERVICE_DOMAIN is required');
};

// 環境変数にMICROCMS_API_KEYが設定されてない場合はエラーを投げる
if(!process.env.MICROCMS_API_KEY){
  throw new Error('MICROCMS_API_KEY is required');
};

// clientSDKの初期化
export const Client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});