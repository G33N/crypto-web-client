import { Appwrite, Models } from 'appwrite';
// require('dotenv').config();

// if (!process.env.APPWRITE_ENDPOINT || !process.env.APPWRITE_PROJECT_ID) {
//   throw new Error('Appwrite environment variables not properly set!');
// }

const sdk = new Appwrite();
sdk.setEndpoint('http://localhost/v1').setProject('primer-proyecto-de-prueba');

const appUrl = process.env.APP_URL;

export type Order = {
  status: string;
  userId: string;
  packId: string;
  paymentId: string;
  createdAt: number;
} & Models.Document;

export const AppwriteService = {
  async logout(): Promise<boolean> {
    try {
      await sdk.account.deleteSession('current');
      return true;
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
      return false;
    }
  },

  async login(): Promise<void> {
    await sdk.account.createAnonymousSession();
  },

  async loginUser(mail, password): Promise<void> {
    await sdk.account.createSession(mail, password);
  },

  async getAuthStatus(): Promise<boolean> {
    try {
      await sdk.account.get();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  async createUser(fullname, mail, password): Promise<boolean> {
    try {
      await sdk.account.create('unique()', mail, password, fullname);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  async verificationUser(urlVerify): Promise<boolean> {
    try {
      await sdk.account.createVerification(urlVerify);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  async recoverPasssword(mail, url): Promise<boolean> {
    try {
      await sdk.account.createRecovery(mail, url);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  async buyPack(packId: string): Promise<boolean> {
    try {
      const executionResponse: any = await sdk.functions.createExecution(
        'createPayment',
        JSON.stringify({
          redirectSuccess: `${appUrl}/cart-success`,
          redirectFailed: `${appUrl}/cart-error`,
          packId,
        }),
        false,
      );

      if (executionResponse.status === 'completed') {
      } else {
        throw new Error(executionResponse.stdout + ',' + executionResponse.err);
      }

      const url = JSON.parse(executionResponse.stdout).paymentUrl;
      window.location.replace(url);

      return true;
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
      return false;
    }
  },

  async getOrders(page = 1): Promise<Models.DocumentList<Order> | null> {
    try {
      const offset = (page - 1) * 10;
      const ordersResponse = await sdk.database.listDocuments<Order>(
        'orders',
        undefined,
        10,
        offset,
        undefined,
        undefined,
        ['createdAt'],
        ['DESC'],
      );

      return ordersResponse;
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
      return null;
    }
  },
};
