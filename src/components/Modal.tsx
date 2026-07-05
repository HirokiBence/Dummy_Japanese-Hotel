'use client'

import { useState, CSSProperties } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ja } from 'date-fns/locale/ja';
registerLocale('ja', ja);

type Props = {
  closeModal: () => void,
  duration: number;
  animationType: "fade-in" | "fade-out" | null;
}

export default function Modal({ closeModal, animationType, duration }: Props){
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  const handleDateChange = (date: (Date | null)[]) => {
    setStartDate(date[0]);
    setEndDate(date[1]);
  }

  return(
    <div id="modal" style={{'--duration': `${duration}ms`}as CSSProperties} data-show={animationType === "fade-in" ? "true" : ""}>
      <div className="bg" onClick={closeModal}></div>
      <div className="form">
        <div className="form__inner">
          <button className="form__close" onClick={closeModal}>
            <div className="form__icon-wrapper">
              <div className="form__icon"></div>
              <div className="form__icon"></div>
            </div>
          </button>
          <h2 className="form__title">宿泊予約</h2>
          <form action="/" method="POST" name="reserve" className="form__body">
            <label className="form__name form__name--first" htmlFor="name">お名前</label>
            <input id="name" className="form__area" type="text" placeholder=" 例：田中太郎"/>
            <label className="form__name" id="email">メールアドレス</label>
            <input id="email" className="form__area" type="email" placeholder=" 例：test@example.com"/>
            <label htmlFor="plan" className="form__name">ご希望プラン（空いているプランのみ表示されます）</label>
            <select id="plan" className="form__area form__select" name="plan" defaultValue={""}>
              <option value="" disabled>&nbsp;プランを選択してください</option>
              <option value="1">①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン</option>
              <option value="2">②平日に優雅に楽しむ、特別宿泊プラン</option>
              <option value="3">③絶景貸切露天と個室会席を満喫できるファミリープラン</option>
            </select>
            <label className="form__name" htmlFor="calnedar">日時選択</label>
            <DatePicker
              className='form__area form__area--picker'
              selected={startDate}
              onChange={handleDateChange}
              minDate={minDate}
              maxDate={maxDate}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              isClearable
              locale="ja"
              dateFormatCalendar="yyyy年 MM月"
              dateFormat="yyyy年MM月dd日"
              placeholderText='日時を選択してください'
            />
            <input className="form__button button" type="submit" name="reserve" value="送信する"/>
          </form>
        </div>
      </div>
    </div>
  );
};