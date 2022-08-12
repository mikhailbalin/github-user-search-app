import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonWrapper,
  IconWrapper,
  Input,
  Search,
} from "./SearchField.styled";

interface SearchFieldProps {
  query: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField = ({
  query,
  onSubmit: handleSubmit,
  onChange: handleChange,
}: SearchFieldProps) => {
  const [animate, setAnimate] = React.useState(false);
  return (
    <form
      onSubmit={(e) => {
        if (!query) setAnimate(true);
        handleSubmit(e);
      }}
    >
      <Search animate={animate} onAnimationEnd={() => setAnimate(false)}>
        <IconWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconWrapper>
        <label htmlFor="search">
          <Input
            id="search"
            type="search"
            value={query}
            onChange={handleChange}
            autoFocus
            placeholder="Search"
          />
        </label>
        <ButtonWrapper>
          <Button type="submit" title="Search">
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </ButtonWrapper>
      </Search>
    </form>
  );
};
