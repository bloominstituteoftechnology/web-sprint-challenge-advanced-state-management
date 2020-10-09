import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SmurfForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Betty"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.name && (
            <p>Looks like there was an error: {errors.name.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            name="age"
            placeholder="13"
            ref={register({ required: true })}
          />
          {errors.age && (
            <p>Looks like there was an error: {errors.age.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="height" placeholder="5cm">
            Height
          </label>
          <input name="height" ref={register({ required: true })} />
          {errors.height && (
            <p>Looks like there was an error: {errors.height.type}</p>
          )}
        </div>
        
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default SmurfForm;