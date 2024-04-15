import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import { NumericFormat } from "react-number-format";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// 작가 아이템 수정 및 등록
// todo 작가 아이템 수정이라면 데이터 불러오는 코드 필요

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 0000-0000"
      definitions={{
        "#": /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const AuthorEditItem = () => {
  const [values, setValues] = React.useState({
    textmask: "", // "(010) 0000-0000"
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  //사진 첨부
  const attachPhoto = () => {
    console.log("사진 첨부하기 클릭");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "40ch", height: "10ch" },
        }}
      >
        <TextField id="standard-basic" label="이름" variant="standard" />
        <TextField
          id="outlined-multiline-static"
          label="설명"
          multiline
          rows={4}
        />
      </Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">전화번호</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>

      <button type="button" class="btn btn-outline-dark">
        사진 첨부
      </button>
      <button type="button" class="btn btn-success">
        저장
      </button>
    </div>
  );
};

export default AuthorEditItem;
