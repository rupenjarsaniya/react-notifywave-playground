import { CheckCircle } from "@phosphor-icons/react";
import { FC } from "react";
import s from "./Table.module.scss";
import clsx from "clsx";

export const Table: FC = () => (
  <table className={s.root}>
    <thead>
      <tr>
        <th></th>
        <th>Success</th>
        <th>Error</th>
        <th>Warning</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Contain</th>
        <td>
          <div className={clsx(s.root__button, s.root__button_contain_success)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_contain_error)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_contain_warning)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_contain_info)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
      </tr>
      <tr>
        <th>Outline</th>
        <td>
          <div className={clsx(s.root__button, s.root__button_outline_success)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_outline_error)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_outline_warning)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_outline_info)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
      </tr>
      <tr>
        <th>Dark</th>
        <td>
          <div className={clsx(s.root__button, s.root__button_dark_success)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_dark_error)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_dark_warning)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_dark_info)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
      </tr>
      <tr>
        <th>Light</th>
        <td>
          <div className={clsx(s.root__button, s.root__button_light_success)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_light_error)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_light_warning)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
        <td>
          <div className={clsx(s.root__button, s.root__button_light_info)}>
            <CheckCircle weight="fill" />
            This is very good.
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);
