export const REGEXEMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const REGEXPASSWORD = /^.{6,16}$/;
export const REGEXNUMBER = /^[0-9,.-]+$/;
export const REGEXINPUT = /^[a-zA-Z0-9!@#$%?^&*()\-=+_:;"'`.,:; &\n]+$/;
export const REGEXNAME = /^(?![\d\s]+$)[a-zA-Z\s]{4,25}$/;
export const REGEXPHONE = /^(\+62|62|0)8[1-9][0-9]{9,11}$/;
export const REGEXPHONEGLOBAL = /^\+?\d{1,3}(?:\s?\d{2,3}){0,2}\d{6,10}$/; // +62 +992 08
export const REGEXURL = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/;
export const REGEXDAYINMONTH = /^(0?[1-9]|[12][0-9]|3[01])$/;
export const REGEXMONTHYEAR = /^(0[1-9]|1[0-2])(\/?\d{2})$/; // 01/2022 or 01-2022 0229
export const REGEXCARDNUMNER = /\b(?:\d[ -]*?){13,16}\b/;
export const REGEXCVV = /^\d{3,4}$/;
export const REGEXGPA = /^[0-4]\.\d\d$/;
export const REGEXPERSENTASE = /^(?:100|[1-9]\d?)$/;

export const useFile = (fileName: string | null, error: boolean) => {
  if (!fileName) {
    return error ? "File harus diisi" : "";
  }
};

export const useInput = (input: string, name: string, error: boolean) => {
  return error && input?.length <= 0
    ? `${name} harus diisi`
    : error && !input?.match(REGEXINPUT)
    ? "Hanya a-z, 0-9, - dan _ yang diperbolehkan"
    : "";
};

export const useName = (name: string, error: boolean) => {
  return error && name.length <= 0
    ? "Nama harus diisi"
    : error && !name.match(REGEXNAME)
    ? "Nama tidak valid"
    : "";
};

export const useNumber = (
  number: string | undefined,
  name: string,
  error: boolean,
) => {
  return error &&
    (number === undefined ||
      (typeof number === "string" && number?.trim().length === 0))
    ? `${name} harus diisi`
    : error && !REGEXNUMBER.test(number || "")
    ? "Hanya angka yang diperbolehkan"
    : "";
};
export const useMonthYear = (input: string, error: boolean) => {
  return error && input?.trim().length === 0
    ? `MM/YY harus diisi`
    : error && !input.match(REGEXMONTHYEAR)
    ? "MM/YY tidak valid"
    : "";
};
export const useCardNumber = (number: string, error: boolean) => {
  return error && number?.trim().length === 0
    ? `Nomor kartu harus diisi`
    : error && !number.match(REGEXCARDNUMNER)
    ? "Nomor kartu tidak valid"
    : "";
};
export const useCvv = (number: string, error: boolean) => {
  return error && number?.trim().length === 0
    ? `CVV harus diisi`
    : error && !number.match(REGEXCVV)
    ? "CVV tidak valid"
    : "";
};
export const usePhone = (number: string, error: boolean) => {
  return error && number.trim().length === 0
    ? `Nomor telepon harus diisi`
    : error && !number.match(REGEXPHONE)
    ? "Nomor telepon tidak valid"
    : "";
};

export const usePhoneGlobal = (number: string, error: boolean) => {
  return error && number?.trim().length === 0
    ? `Nomor telepon harus diisi`
    : error && !number?.match(REGEXPHONEGLOBAL)
    ? "Nomor telepon tidak valid"
    : "";
};

export const useEmail = (email: string, error: boolean) => {
  return error && email?.length <= 0
    ? "Email harus diisi"
    : error && !email?.match(REGEXEMAIL)
    ? "Email tidak valid"
    : "";
};

export const usePassword = (password: string, error: boolean) => {
  return error && password.length <= 0
    ? "Password harus diisi"
    : error && !password.match(REGEXPASSWORD)
    ? "Password harus 6-16 karakter"
    : "";
};
export const useConfirmPassword = (
  password: string,
  confirmPassword: string,
  error: boolean,
) => {
  return error && password.length <= 0
    ? "Konfirmasi password harus diisi"
    : error && password !== confirmPassword
    ? "Konfirmasi password tidak cocok"
    : "";
};

export const useUrl = (url: string, error: boolean) => {
  return error && (!url || !REGEXURL.test(url.trim())) ? "Url tidak valid" : "";
};

export const useDayInMonth = (day: string, error: boolean) => {
  return error && !REGEXDAYINMONTH.test(day) ? "Hanya 1-31 yang diperbolehkan" : "";
};

export const useGpa = (gpa: string, name: string, error: boolean) => {
  return error && gpa.length <= 0
    ? `${name} harus diisi`
    : error && !REGEXGPA.test(gpa)
    ? "Hanya angka 0-4 yang diikuti .00 yang diperbolehkan"
    : "";
};

export const usePersentase = (
  persentase: string,
  name: string,
  error: boolean,
) => {
  return error && persentase.length <= 0
    ? `${name} harus diisi`
    : !REGEXPERSENTASE.test(persentase)
    ? "Hanya 0-100 yang diperbolehkan"
    : "";
};


