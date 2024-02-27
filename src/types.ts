export type WorkSampleT = {
  title: string;
  img: string;
  url: string;
  description?: string;
  tech?: Array<string>;
  video?: string;
};

export type WorkSamplesT = {
  about: {
    header: string;
    text: string;
    buttonText: string;
  };
  workSamples: Array<WorkSampleT>;
};
