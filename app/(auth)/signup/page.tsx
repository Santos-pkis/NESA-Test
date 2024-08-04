// /app/auth/SignUp.js
import Link from 'next/link';

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <ul>
        <li>
          <Link href="/auth/nominee">Sign Up as Nominee</Link>
        </li>
        <li>
          <Link href="/auth/member">Sign Up as Member</Link>
        </li>
        <li>
          <Link href="/auth/judge">Sign Up as Judge</Link>
        </li>
      </ul>
    </div>
  );
};

export default SignUp;
