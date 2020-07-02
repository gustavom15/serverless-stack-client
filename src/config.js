export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "gustavomungarro"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tpkukabjpe.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_k7Wrr0f4y",
    APP_CLIENT_ID: "1ad3gnbo1d2v9p4mph9ba37v21",
    IDENTITY_POOL_ID: "us-east-1:4e3f83ce-4b05-4d73-916d-fe6ff6d80739"
  }
};