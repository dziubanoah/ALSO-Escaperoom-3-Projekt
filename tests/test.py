import tkinter as tk

root = tk.Tk()
root.title("Mein Fenster")
root.geometry("400x300")  

label = tk.Label(root, text="Hallo, Welt!")
label.pack()

root.mainloop()