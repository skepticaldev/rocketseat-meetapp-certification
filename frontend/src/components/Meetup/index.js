import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MeetupItem } from './styles';

export default function Meetup({ data }) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "d 'de' MMMM ', às' k':'mm'h'", {
      locale: pt,
    });
  }, [data.date]);

  return (
    <Link to={{ pathname: '/details', state: { meetup: data } }}>
      <MeetupItem>
        <strong>{data.title}</strong>
        <div>
          <span>{dateParsed}</span>
          <MdChevronRight size={24} color="#fff" />
        </div>
      </MeetupItem>
    </Link>
  );
}

const dataShape = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Meetup.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape(dataShape)).isRequired,
};
