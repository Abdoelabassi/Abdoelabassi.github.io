import { file } from "astro/loaders";
interface Window {
  // dataLayer is typically an array of objects.
  // The first push is usually {'gtm.start': number, event: string}
  // Subsequent pushes can be any object representing an event or configuration.
  dataLayer: Array<Record<string, any>>;
}

interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  category?: string;
  image?: string;
  gallery?: string[];
  features?: string[];
  inStock: boolean;
  featured: boolean;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: string;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    unit: "cm" | "in";
  };
  materials?: string[];
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviewCount: number;
  publishedAt: Date;
  updatedAt?: Date;
  slug?: string | undefined; // Optional, used for Astro content collections
  filePath?: string; // Path to the file in the content collection
}

interface PayPalOrderData {
  orderID: string;
  payerID?: string;
  paymentID?: string;
  billingToken?: string;
  facilitatorAccessToken: string;
}

interface PayPalOrderActions {
  order: {
    create: (orderData: PayPalCreateOrderRequest) => Promise<string>;
    capture: () => Promise<PayPalOrderResponse>;
    get: () => Promise<PayPalOrderResponse>;
  };
}

interface PayPalCreateOrderRequest {
  intent: "CAPTURE" | "AUTHORIZE";
  purchase_units: PayPalPurchaseUnit[];
  payer?: PayPalPayer;
  application_context?: PayPalApplicationContext;
}

interface PayPalPurchaseUnit {
  description?: string;
  custom_id?: string;
  invoice_id?: string;
  soft_descriptor?: string;
  amount: PayPalAmount;
  items?: PayPalItem[];
  shipping?: PayPalShipping;
  payee?: PayPalPayee;
}

interface PayPalAmount {
  currency_code: string;
  value: string;
  breakdown?: PayPalAmountBreakdown;
}

interface PayPalAmountBreakdown {
  item_total?: PayPalMoney;
  shipping?: PayPalMoney;
  handling?: PayPalMoney;
  tax_total?: PayPalMoney;
  insurance?: PayPalMoney;
  shipping_discount?: PayPalMoney;
  discount?: PayPalMoney;
}

interface PayPalMoney {
  currency_code: string;
  value: string;
}

interface PayPalItem {
  name: string;
  unit_amount: PayPalMoney;
  quantity: string;
  description?: string;
  sku?: string;
  category?: "DIGITAL_GOODS" | "PHYSICAL_GOODS";
}

interface PayPalPayer {
  name?: PayPalName;
  email_address?: string;
  payer_id?: string;
  address?: PayPalAddress;
}

interface PayPalName {
  given_name?: string;
  surname?: string;
  full_name?: string;
}

interface PayPalAddress {
  address_line_1?: string;
  address_line_2?: string;
  admin_area_2?: string; // city
  admin_area_1?: string; // state/province
  postal_code?: string;
  country_code: string;
}

interface PayPalShipping {
  name?: PayPalName;
  address?: PayPalAddress;
}

interface PayPalPayee {
  email_address?: string;
  merchant_id?: string;
}

interface PayPalApplicationContext {
  brand_name?: string;
  locale?: string;
  landing_page?: "LOGIN" | "BILLING" | "NO_PREFERENCE";
  shipping_preference?:
    | "GET_FROM_FILE"
    | "NO_SHIPPING"
    | "SET_PROVIDED_ADDRESS";
  user_action?: "CONTINUE" | "PAY_NOW";
  return_url?: string;
  cancel_url?: string;
}

interface PayPalOrderResponse {
  id: string;
  status:
    | "CREATED"
    | "SAVED"
    | "APPROVED"
    | "VOIDED"
    | "COMPLETED"
    | "PAYER_ACTION_REQUIRED";
  intent: "CAPTURE" | "AUTHORIZE";
  purchase_units: PayPalPurchaseUnit[];
  payer?: PayPalPayer;
  create_time?: string;
  update_time?: string;
}

interface PayPalButtonsConfig {
  createOrder?: (
    data: PayPalOrderData,
    actions: PayPalOrderActions
  ) => Promise<string>;
  onApprove?: (
    data: PayPalOrderData,
    actions: PayPalOrderActions
  ) => Promise<void>;
  onCancel?: (data: PayPalOrderData) => void;
  onError?: (err: unknown) => void;
  style?: PayPalButtonStyle;
}

interface PayPalButtonStyle {
  layout?: "vertical" | "horizontal";
  color?: "gold" | "blue" | "silver" | "white" | "black";
  shape?: "rect" | "pill";
  label?: "paypal" | "checkout" | "buynow" | "pay" | "installment";
  tagline?: boolean;
  height?: number;
}

declare global {
  interface Window {
    paypal: {
      Buttons: (config: PayPalButtonsConfig) => {
        render: (container: string | HTMLElement) => Promise<void>;
      };
    };
  }
}
