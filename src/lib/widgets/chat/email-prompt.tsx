import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/shared";

type Props = {
  email: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const EmailPrompt: React.FC<Props> = ({ email, onChange, onSubmit }) => {
  return (
    <Card className="rounded-md">
      <CardHeader className="border-b [.border-b]:pb-4">
        <CardTitle>
          <h2 className="text-base text-center">
            Enter your email to start chat
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="email"
          value={email}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Your email"
          className="w-full border rounded p-2 mb-2 placeholder:text-xs text-sm"
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSubmit}
          className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 font-semibold"
        >
          Start Chat
        </Button>
      </CardFooter>
    </Card>
  );
};
