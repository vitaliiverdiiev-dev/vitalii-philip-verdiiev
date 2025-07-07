import { Button, Icon, Input } from "@/shared";
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export const ChatInput: React.FC<Props> = ({ value, onChange, onSend }) => {
  return (
    <>
      <Input
        className="w-full placeholder:text-sm text-md text-sm"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <Button size="icon" variant="outline" onClick={onSend} className="bg-transparent">
        <Icon icon="send" weight="fill" className="text-green-700 size-6" />
      </Button>
    </>
  );
};
