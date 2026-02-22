import { forwardRef } from 'react';
import clsx from 'clsx';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type TableProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...rest }, ref) => {
    return (
      <div className={clsx('content-table')}>
        <table ref={ref} {...rest}>
          {children}
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';
