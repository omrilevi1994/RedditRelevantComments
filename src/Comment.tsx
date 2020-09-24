import * as React from 'react';

// Your props are your public API, so it's worth taking the
// time to use JSDoc to explain how it works:

export interface Props {
  body: string,
}

const Comment: React.FC<Props> = (props: any) => {

  return (
    <div style={{border:'solid 1px', marginBottom:'1%'}}>
      {props.body}
    </div>
  )
}

export default Comment;