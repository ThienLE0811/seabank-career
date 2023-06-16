'use client';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export const items: {
  img: string;
  title: string;
  description: string;
}[] = [
  {
    img: '/contentIcon/money.svg',
    title: 'Bán hàng / Kinh doanh',
    description: '(2 open positions)',
  },
  {
    img: '/contentIcon/megaphone.svg',
    title: 'Kế toán / Kiểm toán',
    description: '(86 open positions)',
  },
  {
    img: '/contentIcon/vector.svg',
    title: 'Quản trị rủi ro',
    description: '(43 open positions)',
  },
  {
    img: '/contentIcon/web-programming.svg',
    title: 'Công nghệ thông tin',
    description: '(12 open positions)',
  },
  {
    img: '/contentIcon/start.svg',
    title: 'Tài chính / Kế hoạch',
    description: '(19 open positions)',
  },
  {
    img: '/contentIcon/support.svg',
    title: 'Dịch vụ khách hàng',
    description: '(72 open positions)',
  },
  {
    img: '/contentIcon/first-aid-kit.svg',
    title: 'Tài chính / Đầu tư',
    description: '(25 open positions)',
  },
  {
    img: '/contentIcon/car.svg',
    title: 'Quản lý dự án',
    description: '(92 open positions)',
  },
];

export const featured: {
  item: string;
}[] = [
  {
    item: 'Đôi bên cùng có lợi',
  },
  { item: 'Xác định được ứng viên phù hợp' },
  { item: 'Cách thức nộp CV đơn giản cho người ứng tuyển' },
];

export const lists: {
  item: string;
}[] = [
  {
    item: 'Đôi bên cùng có lợi',
  },
  { item: 'Xác định được ứng viên phù hợp' },
  { item: 'Cách thức nộp CV đơn giản cho người ứng tuyển' },
];

export default function Career() {
  return (
    <div className="">
      <div className="relative h-[636px] bg-neutral-300 pb-3 max-xl:h-auto">
        <div className=" 2xl: mx-auto grid max-w-7xl grid-cols-1 px-2 py-1 pb-4 sm:px-6 lg:px-8">
          <div className="relative max-w-full pt-5">
            <h2 className="text-3xl font-medium text-heading">
              Cơ hội nghề nghiệp
            </h2>
            <p className="mt-4 text-base text-text">
              2020 công việc đang tuyển
            </p>
            <span className="absolute top-[50%] left-[80%] text-span">
              <Link href="/about">Xem tất cả</Link>
            </span>
          </div>
          <div className="mx-auto mt-[3%] grid gap-8 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
            {items.map((val, index) => (
              <div className="h-56 w-[300px] bg-white text-center align-middle">
                <div className="mx-auto mt-10 mb-6 h-[70px] w-[70px] rounded-full bg-neutral-200"></div>
                <h4 className=" truncate text-lg font-medium text-heading">
                  {val?.title}
                </h4>
                <p className="truncate text-sm font-normal text-text">
                  {val?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
