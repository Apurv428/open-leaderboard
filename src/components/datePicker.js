import React, { useEffect, useState } from 'react';
import { DatePicker, TimePicker, Select, Space, message, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment'
import { t } from 'i18next';
const { TabPane} = Tabs;
const { Option } = Select;

function PickerWithType({ type, onChange, defaultDate }) {
    console.log(defaultDate);
  return <DatePicker picker={type} onChange={onChange}  disabledDate={disabledDate}  defaultValue={defaultDate}/>;
}

function disabledDate(current) {
    // Can not select days before today and today
    return current< moment('2015') || current >= moment().endOf('day');
  }

const SwitchablePicker = (props) => {
  return (
    <>\
        <Tabs defaultActiveKey="1">
            <TabPane tab={t('month')} key="1">
                <PickerWithType type='month' defaultDate={moment(props.year+'/'+(props.month+1),'YYYY-MM')} onChange={value=>{
                    if(value.years === null || value.months === null){
                        message.error('This is an error month');
                        return false;
                    }
                    props.update(value.years(),value.months());
                }} />
            </TabPane>
            <TabPane tab={t('year')} key="2">
                <PickerWithType type='year' defaultDate={moment(props.year)} onChange={value=>{
                    if(value.years() === null){
                        message.error('This is an error year');
                        return false;
                    }
                    props.update(value.years(),null);
                 }} />
            </TabPane>
        </Tabs>
    </>
  );
}

export default SwitchablePicker;