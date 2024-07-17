import * as S from "./styles";
import InputText from "@/components/Input/InputText";
import InputEmoji from "@/components/Input/InputEmoji";
import { useCallback, useState } from "react";
import InputWeekDay from "@/components/Input/InputWeekDay";
import InputColor from "@/components/Input/InputColor";
import InputDate from "@/components/Input/InputDate";
import InputTime from "@/components/Input/InputTime";
import { Control, Controller, FieldErrors } from "react-hook-form";

import InputSwitch from "@/components/Input/InputSwitch";
import { TaskFormFields, TaskType } from "@/entity/Task/dto";

export type Option = {
  label: string;
  value: TaskType;
};

const options: Option[] = [
  {
    label: "Evento diario",
    value: "daily",
  },
  {
    label: "Data expecifica",
    value: "event",
  },
];

type TaskFormProps = {
  control: Control<TaskFormFields, any>;
  errors: FieldErrors<TaskFormFields>;
};

export default function TaskForm(props: TaskFormProps) {
  const { control, errors } = props;
  const [formType, setFormType] = useState<TaskType>("daily");

  const handleChangeFormType = useCallback((value: TaskType) => {
    setFormType(value);
  }, []);

  return (
    <S.Container>
      <Controller
        control={control}
        rules={{ required: false }}
        name="emoji"
        render={({ field: { onChange, value } }) => (
          <InputEmoji
            required
            label="Escolher Emoji"
            onChange={onChange}
            value={value}
          />
        )}
      />

      <S.InputWrapper>
        <Controller
          control={control}
          rules={{
            required: {
              message: "Campo obrigatório",
              value: true,
            },
          }}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              error={errors.name}
              required
              label="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </S.InputWrapper>

      <S.InputWrapper>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              error={errors.description}
              label="Descrição"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </S.InputWrapper>

      <S.SelectorWrapper>
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange } }) => (
            <InputSwitch
              defaultValue="daily"
              options={options}
              onPress={(v) => {
                handleChangeFormType(v);
                onChange(v);
              }}
            />
          )}
        />
      </S.SelectorWrapper>

      {formType === "daily" ? (
        <>
          <S.InputWrapper>
            <Controller
              control={control}
              rules={{
                required: {
                  message: "Campo obrigatório",
                  value: true,
                },
              }}
              name="days"
              render={({ field: { onChange, value } }) => (
                <InputWeekDay
                  required
                  label="Dias da semana"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </S.InputWrapper>

          <S.InputWrapperGroup>
            <Controller
              control={control}
              name="dailyTime"
              render={({ field: { onChange } }) => (
                <InputTime label="Horário" onChange={onChange} />
              )}
            />
            <S.InputRowWrapper>
              <Controller
                control={control}
                name="dailyColor"
                render={({ field: { onChange } }) => (
                  <InputColor
                    required
                    onChange={onChange}
                    label="Cor do card"
                  />
                )}
              />
            </S.InputRowWrapper>
          </S.InputWrapperGroup>
        </>
      ) : (
        <>
          <S.InputWrapperGroup>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <InputDate required useToday onChange={onChange} label="Data" />
              )}
            />
            <S.InputRowWrapper>
              <Controller
                control={control}
                name="time"
                render={({ field: { onChange, value } }) => (
                  <InputTime
                    label="Horário"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </S.InputRowWrapper>
          </S.InputWrapperGroup>
          <S.InputWrapper>
            <Controller
              control={control}
              name="color"
              render={({ field: { onChange } }) => (
                <InputColor required onChange={onChange} label="Cor do card" />
              )}
            />
          </S.InputWrapper>
        </>
      )}
    </S.Container>
  );
}
