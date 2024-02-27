export type WorkSampleT = {
  title: string;
  img: string | [];
  url: string;
  description?: string;
  tech?: Array<string>;
};

export type WorkSamplesT = {
  about: {
    header: string;
    text: string;
  };
  workSamples: Array<WorkSampleT>;
};
