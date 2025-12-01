import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import MainInput from "@/common/components/inputs/MainInput";
import MainTextArea from "@/common/components/inputs/MainTextArea";
import MainBtn from "@/common/components/buttons/MainBtn";
import PreVisitFormSection from "./PreVisitFormSection";
import MainSelect from "@/common/components/inputs/MainSelect";
import SectionEnding from "@/common/components/sections/SectionEnding";
type ProcedureOption = { id: number; name: string };
type EyeOption = { id: number; name: string };

export type PreVisitFormValues = {
  fullName: string;
  dateOfBirth: string;
  email: string;
  phone?: string;
  procedureId?: number | null;
  eye?: number | null; // 1=right,2=left,3=both مثلاً
  currentSymptoms?: string;
  expectations?: string;
  medications?: string;
  allergies?: string;
  generalConditions?: string;
};

type Props = {
  procedures: ProcedureOption[];
  initialProcedureId?: number | null;
  onSubmitForm: (data: PreVisitFormValues) => Promise<void> | void;
};

const PreVisitForm: FC<Props> = ({
  procedures,
  initialProcedureId = null,
  onSubmitForm,
}) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<PreVisitFormValues>({
    defaultValues: {
      procedureId: initialProcedureId,
    },
  });

  const selectedProcedureId =
    watch("procedureId") ?? initialProcedureId ?? null;
  const selectedEye = watch("eye") ?? null;

  const eyeOptions: EyeOption[] = [
    { id: 1, name: "PreVisit.eyeRight" },
    { id: 2, name: "PreVisit.eyeLeft" },
    { id: 3, name: "PreVisit.eyeBoth" },
  ];

  const procedureOptions: ProcedureOption[] = procedures;

  const onSubmit = async (data: PreVisitFormValues) => {
    await onSubmitForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-label={t("PreVisit.formAria", "Patient pre-visit form")}
    >
      {/* Basic info */}
      <PreVisitFormSection
        id="previsit-basic"
        title={t("PreVisit.basicTitle", "Your basic details")}
        description={t(
          "PreVisit.basicDesc",
          "These details help us link your form to your appointment."
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MainInput
            label="PreVisit.fullName"
            placeholder="PreVisit.fullNamePlaceholder"
            required
            {...register("fullName", { required: "PreVisit.errors.fullName" })}
            error={errors.fullName?.message}
          />

          <MainInput
            label="PreVisit.dateOfBirth"
            type="date"
            required
            {...register("dateOfBirth", {
              required: "PreVisit.errors.dateOfBirth",
            })}
            error={errors.dateOfBirth?.message}
          />

          <MainInput
            label="PreVisit.email"
            type="email"
            required
            {...register("email", { required: "PreVisit.errors.email" })}
            error={errors.email?.message}
          />

          <MainInput
            label="PreVisit.phone"
            placeholder="PreVisit.phonePlaceholder"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>
      </PreVisitFormSection>

      {/* Procedure & vision */}
      <PreVisitFormSection
        id="previsit-vision"
        title={t("PreVisit.visionTitle", "Your vision and planned procedure")}
        description={t(
          "PreVisit.visionDesc",
          "Tell us which eye and which treatment you are considering."
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MainSelect
            label="PreVisit.procedureLabel"
            placeholder="PreVisit.procedurePlaceholder"
            options={procedureOptions}
            value={selectedProcedureId}
            onChange={(val) => setValue("procedureId", val ?? undefined)}
            error={errors.procedureId?.message as string | undefined}
            required
            ariaLabel={
              t("PreVisit.procedureAria", "Select planned procedure") as string
            }
          />

          <MainSelect
            label="PreVisit.eyeLabel"
            placeholder="PreVisit.eyePlaceholder"
            options={eyeOptions}
            value={selectedEye}
            onChange={(val) => setValue("eye", val ?? undefined)}
            error={errors.eye?.message as string | undefined}
            required
            ariaLabel={t("PreVisit.eyeAria", "Select eye")}
          />
        </div>

        <MainTextArea
          label="PreVisit.symptoms"
          placeholder="PreVisit.symptomsPlaceholder"
          rows={4}
          {...register("currentSymptoms")}
          error={errors.currentSymptoms?.message}
        />

        <MainTextArea
          label="PreVisit.expectations"
          placeholder="PreVisit.expectationsPlaceholder"
          rows={4}
          {...register("expectations")}
          error={errors.expectations?.message}
        />
      </PreVisitFormSection>

      {/* Medical history */}
      <PreVisitFormSection
        id="previsit-medical"
        title={t("PreVisit.medicalTitle", "Your medical and eye history")}
        description={t(
          "PreVisit.medicalDesc",
          "This information helps your surgeon plan safely."
        )}
      >
        <MainTextArea
          label="PreVisit.medications"
          placeholder="PreVisit.medicationsPlaceholder"
          rows={3}
          {...register("medications")}
          error={errors.medications?.message}
        />

        <MainTextArea
          label="PreVisit.allergies"
          placeholder="PreVisit.allergiesPlaceholder"
          rows={3}
          {...register("allergies")}
          error={errors.allergies?.message}
        />

        <MainTextArea
          label="PreVisit.generalConditions"
          placeholder="PreVisit.generalConditionsPlaceholder"
          rows={3}
          {...register("generalConditions")}
          error={errors.generalConditions?.message}
        />
      </PreVisitFormSection>

      <div className="flex justify-center pt-2">
        <div className="w-full md:w-[220px]">
          <MainBtn
            type="submit"
            text="PreVisit.submit"
            className="w-full flex justify-center"
            isPending={isSubmitting}
          />
        </div>
      </div>
      <SectionEnding text="This form is for preparation only and does not replace a full medical assessment in clinic." />
    </form>
  );
};

export default PreVisitForm;
