export interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: string;
  label?: string;
  description?: string;
  logo?: string | React.ReactNode | JSX.Element;
  error?: string;
  className?: string;
  classNameParent?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isUsername?: boolean;
}

export interface IDropDown {
  options: {
    value: string;
    label: string;
    name?: string;
    code?: string;
  }[];
  name: string;
  label: string;
  defaultValue: string;
  setValue?: any;
  placeholder?: string;
  onChange: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  error?: string;
  className?: string;
  classNameParent?: string;
  isLoading?: boolean;
}

export interface IFormContactUs {
  sender_name: string;
  sender_email: string;
  subject: string;
  message: string;
}
