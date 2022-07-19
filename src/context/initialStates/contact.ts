export interface ContactData {}
export interface ContactState {
  data?: Array<ContactData>;
  error?: string | null;
  loading?: boolean;
}

const contactInitState: ContactState = {
  data: [{}],
  error: null,
  loading: false,
};

export default contactInitState;
