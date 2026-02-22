import { forwardRef } from 'react';
import clsx from 'clsx';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

export const Hr = forwardRef<HTMLHRElement, Props>(
  (props, ref) => {
    return <hr ref={ref} className={clsx('content-hr')} {...props} />;
  }
);

Hr.displayName = 'Hr';
