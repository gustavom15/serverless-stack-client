const region = 'us-east-1'

const dev = {
  STRIPE_KEY: "pk_test_51GsirUAIdO82wzdNm1AG4cZOjcwJ9ZijRwnexg4zrwIPE8sUf5Da0JmFARScZdumCYs2uZ5cOesUv5TXjj18z9MQ00QFETohU5",
  s3: {
    REGION: region,
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-76xft0nxuvsz"
  },
  apiGateway: {
    REGION: region,
    URL: "https://ce9bm5xati.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: region,
    USER_POOL_ID: "us-east-1_DbmorDvob",
    APP_CLIENT_ID: "3p211jc58q2eo1bs3isohul8q3",
    IDENTITY_POOL_ID: "us-east-1:7ae96777-6d9d-4771-8fc2-7cb76b67820c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GsirUAIdO82wzdNm1AG4cZOjcwJ9ZijRwnexg4zrwIPE8sUf5Da0JmFARScZdumCYs2uZ5cOesUv5TXjj18z9MQ00QFETohU5",
  s3: {
    REGION: region,
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-q2gtpiyxgagc"
  },
  apiGateway: {
    REGION: region,
    URL: "https://tpkukabjpe.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: region,
    USER_POOL_ID: "us-east-1_mQ1tRWwUX",
    APP_CLIENT_ID: "gep7ai724mvnpj10tpmbobhms",
    IDENTITY_POOL_ID: "us-east-1:39d97c89-b17f-4d5a-9f6f-15ce8c78248f"
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};