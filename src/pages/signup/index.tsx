import { useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { checkName, signup } from '@/apis/userApi';
import Carousel from '@/components/loginLogout/Carousel';
import Input from '@/components/shared/Input';
import * as validateForm from '@/libs/validateForm';
import { userStore } from '@/store/userStore';

/**
 * 회원가입 페이지
 * @description input 공용 컴포넌트를 이용하여 회원가입 페이지를 구성
 * @returns
 */

export default function SignupPage() {
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [doubleCheck, setDoubleCheck] = useState(false);
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      void router.push('/main'); // 예시로 대시보드 페이지로 리디렉션
    }
  }, [isLoggedIn]);

  
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm.isDoubleChecked(doubleCheck);
    validateForm.isValidNickname(nick);
    validateForm.isValidPassword(password);
    validateForm.isPasswordMatching(password, passwordCheck);
    validateForm.isValidEmailFormat(email);

    await signup(nick, email, password, passwordCheck);
  };

  const handleDoubleCheck = async () => {
    validateForm.isValidNickname(nick);
    const res = await checkName(nick);
    setDoubleCheck(res);
  };

  return (
    <div aria-label="target" className="flex h-screen flex-row bg-white pc:w-full pc:bg-white">
      <div className="mt-[60pt] flex min-h-[500px] w-full flex-shrink-0 flex-col items-center justify-center overflow-y-auto tablet:min-h-0 pc:w-1/2 pc:space-y-6 pc:overflow-y-hidden">
        {/* pc용 */}
        <h2 className="mt-8 hidden text-4xl font-bold pc:flex">회원가입</h2>
        <p className="m-auto hidden max-w-80 text-pretty text-center text-lg pc:flex">
          지금 바로 가입하여 취미 활동을 통해 새로운 사람들과 특별한 경험을 만들어보세요.
        </p>
        {/* pc용 end */}
        <form onSubmit={handleSignup} className="m-0 flex flex-col items-center bg-white p-8 tablet:w-[620px] tablet:rounded-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold pc:m-auto pc:hidden pc:text-4xl">회원가입</h2>
          <div className="w-full space-y-4">
            <div className="flex">
              <Input type="text" name="nick" onChange={(e) => setNick(e.target.value)} />
              <button
                type="button"
                onClick={handleDoubleCheck}
                className="ml-4 mt-6 h-[44px] w-24 rounded-xl border bg-blue-800 text-sm text-white hover:bg-blue-700"
              >
                중복 확인
              </button>
            </div>
            <Input type="email" name="id" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" name="password_check" passwordToMatch={password} onChange={(e) => setPasswordCheck(e.target.value)} />
          </div>
          <button type="submit" className="mt-4 w-full rounded-xl bg-blue-800 py-2 text-lg text-white hover:bg-blue-700">
            생성하기
          </button>
          <p className="mt-4 text-center text-sm mobile:text-base">
            이미 회원이신가요?{' '}
            <Link href="/login" className="text-gray-400 underline hover:font-bold hover:text-blue-700">
              로그인
            </Link>
          </p>
        </form>
      </div>
      <div className="relative hidden h-full w-1/2 flex-col items-center justify-center bg-blue-800 pc:flex">
        <Carousel />
      </div>
    </div>
  );
}
