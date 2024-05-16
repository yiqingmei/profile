import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div>
      <header className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between py-4">
          <nav className="hidden md:block">
            <ul className="flex flex-wrap gap-x-8 text-xl text-white">
              {props.leftNav}
            </ul>
          </nav>

          <nav className="hidden md:block">
            <ul className="ml-8 flex flex-wrap gap-x-6 text-xl">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.name}.
        {` ${t('made_with')} `}
        <a
          href="https://creativedesignsguru.com"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          CreativeDesignsGuru
        </a>
        .
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  );
};

export { BaseTemplate };
