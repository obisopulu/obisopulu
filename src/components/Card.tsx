interface CardProps {
  size: 'min' | 'mid' | 'max';
}

export const Card = ({ size }: CardProps) => {

  const cardHeight = size === 'min' ? 'min' : size === 'mid' ? 'mid' : 'max'

  return (
    <div
      className={` ${cardHeight}`}
    >Card</div>
  )
}
