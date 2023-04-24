import { get, isEmpty } from 'lodash';
import { ReactElement } from 'react';

interface columItem {
  key: string;
  dataInkey?: string;
  render?: any;
  label: string | ReactElement;
  labelProps?: Record<string, any>;
}
interface Props {
  loading: boolean;
  rowKey?: string;
  colums: columItem[];
  dataSource: [];
  page: number;
  pageSize?: number;
  onChangePage?: any;
  total: number;
}
const Table = ({
  colums,
  dataSource = [],
  rowKey = 'hash',
  loading,
}: Props) => {
  return (
    <div className="space-y-4">
      <div className="max-w-[100%]">
        <table className="table w-full">
          <thead>
            <tr>
              {colums.map(({ label, labelProps, key }: any) => (
                <th className="!normal-case" key={key} {...labelProps}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item: any) => (
              <tr key={item[rowKey]}>
                {colums.map(
                  ({ key, dataInkey = key, render, labelProps }: any) => (
                    <td key={dataInkey} {...labelProps}>
                      {render ? render(get(item, key), item) : get(item, key)}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {loading && (
        <div className="flex items-center justify-center py-4">
          <button className="btn btn-square loading btn-ghost" />
        </div>
      )}
      {!loading && isEmpty(dataSource) && (
        <div className="flex border-b border-gray-100 items-center justify-center py-4 text-sm text-gray-400">
          No Data.
        </div>
      )}
    </div>
  );
};

export default Table;
