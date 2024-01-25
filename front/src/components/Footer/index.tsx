import { css } from 'linaria';
import { styled } from 'linaria/react';
import Link from 'next/link';

const FooterStyle = styled.footer`
  height: 139px;
  background-color: #333333;
  color: white;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
`;
const FooterLinkStyle = css`
  color: white;
  text-decoration: none;
`;

const FooterTextStyle = styled.li`
  display: inline-block;
  margin: 20px 15px 0px 15px;
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <nav>
        <ul>
          <FooterTextStyle>
            <Link href='#' className={FooterLinkStyle}>
              運営会社
            </Link>
          </FooterTextStyle>
          <FooterTextStyle>
            <Link href='#' className={FooterLinkStyle}>
              プライバシーポリシー
            </Link>
          </FooterTextStyle>
          <FooterTextStyle>
            <Link href='#' className={FooterLinkStyle}>
              免責事項・著作権について
            </Link>
          </FooterTextStyle>
        </ul>
      </nav>
      <small>© 2021-2022 Virtual Wall City Library.</small>
    </FooterStyle>
  );
};
