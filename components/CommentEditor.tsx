'use client';

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PlusCircle, X } from "lucide-react";

export default function CommentEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p></p>",
  });

  return (
    <div className="bg-[#2F2F30] border border-[#5F5F61] rounded p-3 text-white">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2 text-gray-300">
          <PlusCircle className="w-4 h-4" />
          <span>Label</span>
        </div>
        <X className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      <div className="min-h-[100px] p-2 bg-[#2F2F30] rounded text-white text-sm">
        <EditorContent editor={editor} />
      </div>

      <div className="flex items-center justify-between text-gray-400 text-xs border-t pt-2 mt-2 border-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-sm">24▼</span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="italic">I</button>
          <button onClick={() => editor?.chain().focus().toggleBold().run()} className="underline">U</button>
          <button onClick={() => editor?.chain().focus().toggleStrike().run()} className="line-through">S</button>
        </div>
        <div className="flex gap-2">
          <button onClick={() => editor?.chain().focus().toggleBulletList().run()}>• List</button>
          <button onClick={() => editor?.chain().focus().toggleOrderedList().run()}>1. List</button>
        </div>
      </div>
    </div>
  );
}
