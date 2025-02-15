import React from 'react';
import PropTypes from 'prop-types';

import classes from './DetailCard.module.scss';
// import viewIco from '../../assets/imgs/detailsCard/view.png';
import { ReactComponent as ListIcon } from '../../assets/svg/detailCard/list.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/detailCard/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/svg/detailCard/delete.svg';

const DetailCard = ({ details }) => (
    <div className={classes.card}>
        <div className={classes.card__heading}>
            {/* <img src={viewIco} alt="view-icon" /> */}
            <ListIcon />
            <span className={classes.card__heading__title}>{details.name}</span>
            <span className={classes.card__heading__control}>
                <button type="button">
                    <EditIcon />
                </button>
                <button type="button">
                    <DeleteIcon />
                </button>
            </span>
        </div>
        <div className={classes.card__content}>
            <div>
                {details
                    && details.title
                    && details.title.map((el) => (
                        <div
                          className={`${classes.card__content__item} ${classes['card__content__item-title']}`}
                          key={el}
                        >
                            {el}
                        </div>
                    ))}
            </div>
            <div>
                {details
                    && details.content
                    && details.content.map((el) => (
                        <div className={classes.card__content__item} key={el}>
                            {el}
                        </div>
                    ))}
            </div>
            {details && details.price && (
                <div className={classes['card__content__item-last']}>
                    <span>Giá đề xuất</span>
                    <span>{details.price}</span>
                </div>
            )}
        </div>
    </div>
);

DetailCard.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string,
  }),
};

DetailCard.defaultProps = {
  details: {},
};

export default DetailCard;
