/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {SyntheticEvent, useState} from 'react';
import clsx from 'clsx';
import s from './DropDown.module.scss';
import {useTypedSelector} from '../../../hooks/useTypedSelector';

interface IDropDownProps {
    callback?: (args: any) => void;
    onOpen?: () => void;
    placeholder?: string;
    title?: string;
    className?: string;
    items: {
        id: number;
        label: string;
    }[];
}

function DropDown(props: IDropDownProps) {
    const [isOpened, setIsOpened] = useState(false);
    const {addOption} = useTypedSelector((state) => state.dropDown);
    const {editOption} = useTypedSelector((state) => state.dropDown);
    const {removeOption} = useTypedSelector((state) => state.dropDown);

    let typeOfLabel = 0;
    switch (true) {
        case addOption:
            typeOfLabel = 0;
            break;
        case editOption:
            typeOfLabel = 1;
            break;
        case removeOption:
            typeOfLabel = 2;
            break;

        default: break;
    }

    const [selectedItem, setSelectedItem] = useState<string>(
        props.placeholder ? '' : props.items[typeOfLabel].label,
    );

    const onClickHandler = (e: SyntheticEvent): void => {
        setIsOpened((prev) => !prev);
        if (props.onOpen) {
            props.onOpen();
        }
    };

    const onClickItemHandler = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;

        if (!target.dataset.id) {
            return;
        }

        setSelectedItem(target.innerHTML);
        setIsOpened(false);

        if (props.callback) {
            props.callback(Number(target.dataset.id));
        }
    };

    return (
        <div
            className={clsx(
                s.DropDown,
                isOpened && s.DropDown_opened,
                props.className,
            )}
        >
            <p>{props.title}</p>
            <div
                className={clsx(s.DropDown__header)}
                onClick={onClickHandler}
            >
                {selectedItem || props.placeholder}
            </div>
            <div
                className={clsx(s.DropDown__content)}
                onClick={onClickItemHandler}
            >
                {props.items?.map((item, itemIndex) => (
                    <div
                        className={clsx(s.DropDown__content_item)}
                        key={itemIndex}
                        data-id={item.id}
                        data-label={item.label}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropDown;
