app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("MERN Chat Backend is running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);