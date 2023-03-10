import s from "./PasswordStrengthBar.module.css";
import cx from "classnames";

interface PasswordStrengthBarProps {
  passwordValue: string;
}

const passwordType = {
  week: { message: "Słabe", color: "red", colorBar: 1 },
  medium: { message: "Średnie", color: "#FFC72C", colorBar: 3 },
  strong: { message: "Śilne", color: "#00AB66", colorBar: 4 },
};

export const PasswordStrengthBar = ({
  passwordValue = "",
}: PasswordStrengthBarProps) => {
  const strengthChecks = {
    length: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasDigit: false,
    hasSpecialChar: false,
  };

  //rules
  strengthChecks.length = passwordValue.length >= 8 ? true : false;
  strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
  strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
  strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
  strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

  const verifiedList = Object.values(strengthChecks).filter((value) => value);

  const getActiveStrength = () => {
    if (verifiedList.length == 5) return passwordType.strong;
    if (verifiedList.length >= 2) return passwordType.medium;
    return passwordType.week;
  };
  const activeStrength = getActiveStrength();
  const barNumber = new Array(4).fill(false);

  return (
    <div className={cx(s.barWrapper, passwordValue.length ? s.active : null)}>
      {barNumber.map((_, i) => {
        return (
          <span
            className={s.bar}
            style={{
              background:
                activeStrength.colorBar > i ? activeStrength.color : "",
            }}
            key={i}
          ></span>
        );
      })}

      <p className={s.desc}>{activeStrength.message}</p>
    </div>
  );
};
