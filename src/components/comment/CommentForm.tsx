import styled from 'styled-components';
import { comments } from '../../lib/fakeData/comments';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Comment from './Comment';
const Form = styled.form`
  display: flex;
  align-items: center;
`;
const StyledInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding-bottom: 0.5rem;
  outline: none;
  width: 90%;
  margin-right: 5px;
  padding-left: 7px;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const CommentUl = styled.ul`
  width: 100%;
`;
const CommentForm = () => {
  return (
    <>
      <Form>
        <StyledInput type="text" />
        <Button>입력</Button>
      </Form>
      <CommentUl>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </CommentUl>
    </>
  );
};
export default CommentForm;
