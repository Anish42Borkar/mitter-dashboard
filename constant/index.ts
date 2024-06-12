import { CommentT } from "@/types";

export const comments: CommentT[] = [
  {
    name: "Rahul Singh",
    time: "12:15 Today",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
    color: "#FC8026",
    hasComment: [
      {
        name: "Varun Kumar",
        time: "12:15 Today",
        comment:
          "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
        color: "#8426FC",
        hasComment: [
          {
            name: "Rushub Kavlekar",
            time: "12:15 Today",
            comment:
              "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
            color: "#D126FC",

            hasComment: [],
          },
        ],
      },
      {
        name: "Varun Kumar",
        time: "12:15 Today",
        comment:
          "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
        color: "#8426FC",

        hasComment: [],
      },
    ],
  },

  {
    name: "Varun Kumar",
    time: "12:15 Today",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
    color: "#8426FC",

    hasComment: [],
  },

  {
    name: "Varun Kumar",
    time: "12:15 Today",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
    color: "#FC8026",

    hasComment: [],
  },
];

export type CardDataT = {
  name: string;
  color: string;
};

export const cardData: CardDataT[] = [
  {
    name: "Rahul Singh",
    color: "#FC8026",
  },
  {
    name: "Rahul Singh",
    color: "#FC8026",
  },
  {
    name: "Varun Kumar",
    color: "#8426FC",
  },
];
