/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {SyntheticEvent, useState} from 'react';
import clsx from 'clsx';
import s from './DropDown.module.scss';

interface IDropDownProps {
    callback?: (args: any) => void;
    onOpen?: () => void;
    placeholder?: string;
    title?: string;
    className?: string;
    items: {
        idGroup: number;
        numGroup: string;
    }[];
}

function DropDown(props: IDropDownProps) {
    const [isOpened, setIsOpened] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>(
        props.placeholder ? '' : props.items[0].numGroup,
    );

    const onClickHandler = (e: SyntheticEvent): void => {
        setIsOpened((prev) => !prev);
        if (props.onOpen) {
            props.onOpen();
        }
    };

    const onClickItemHandler = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;

        if (!target.dataset.numGroup) {
            return;
        }

        setSelectedItem(target.innerHTML);
        setIsOpened(false);

        if (props.callback) {
            props.callback(target.dataset.id);
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
                        data-id={item.idGroup}
                    >
                        {item.numGroup}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropDown;
