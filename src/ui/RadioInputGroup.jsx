import RadioInput from "./RadioInput";

export default function RadioInputGroup({ watch, register, errors, config }) {
  const { options, validationSchema={}, name } = config;

  return (
    <div>
      <div className="flex justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            name={name}
            value={value}
            label={label}
            id={value}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors && errors["role"] && (
        <span className="text-error text-xs block mt-2">
          {errors["role"]?.message}
        </span>
      )}
    </div>
  );
}
