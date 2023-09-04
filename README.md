# Spaceskool Front-end App

Proyek ini dibuat menggunakan framework React-Js dan Tailwind.

## Semua Route

Semua Route URL Saat ini, anda bisa memasuki url ini:

### `Not Auth URL`
[package.json](package.json)
<Route path="/" element={<Home />} /> {/*Sudah responseive*/}\
<Route path="/docs" element={<Document />} /> {/*Sudah responseive */}\
<Route path="/view/docs" element={<DetailDocument />} /> {/*Sudah responseive */}\
<Route path="/blog" element={<Learning />} /> {/*Sudah responseive */}\
<Route path="/login" element={<Login />}/>  {/*Sudah responseive */}\
<Route path="/register" element={<Register />}/> {/*Sudah responseive */}\
<Route path="/add/information" element={<AddInformation />}/> {/*Sudah responseive */}\
<Route path="/add/password" element={<AddPassword />}/> {/*Sudah responseive */}\
<Route path="/reset/password" element={<ForgotPassword />}/> {/*Sudah responseive */}\
<Route path="/set/new/password" element={<SetNewPassword />}/> {/*Sudah responseive */}\

Buka [http://localhost:3000](http://localhost:3000) untuk melihatnya di browser Anda.\

Laman akan dimuat ulang saat Anda melakukan perubahan.\
Anda juga dapat melihat kesalahan serat di konsol.

### `Auth URL`

<Route path="/" element={<Main />} /> {/*Sudah responseive*/}\
<Route path="/view/class" element={<DetailClass />} /> {/*Sudah responseive*/}\
<Route path="/view/class/detail/absent" element={<DetailAbsent />} /> {/*Sudah responseive */}\
<Route path="/view/class/detail/absent/action/password" element={<ActionAbsentPassword />} /> {/*Sudah responseive */}\
<Route path="/view/class/detail/absent/action/photo" element={<ActionAbsentPhoto />} />  {/*Sudah responseive */}\
<Route path="/view/class/detail/task/assigment" element={<DetailTaskAssigment />} />  {/*Sudah responseive */}\
<Route path="/class/id/task/id" element={<Task />} /> {/*Sudah responseive */}\
<Route path="/view/class/detail/resource" element={<DetailResource />} /> {/*Sudah responseive */}\
<Route path="/profile" element={<Profile />} /> {/*Sudah responseive */}\

<Route path="/my/class" element={<MyClass />} /> {/*Sudah responseive */}\
<Route path="/view/my/class" element={<MyClassDetail />} /> {/*Sudah responseive */}\
<Route path="/view/my/class/students" element={<MyClassStudent />} />  {/*Sudah responseive */}\

<Route path="/tweet" element={<Tweet />} /> {/*Sudah responseive */}\
<Route path="/search/tweet" element={<SearchTweet />} /> {/*Sudah responseive */}\
<Route path="/notification/tweet" element={<NotificationTweet />} /> {/*Sudah responseive */}\
<Route path="/view/tweet" element={<ViewFeed />} /> {/*Sudah responseive */}\


<Route path="/create/class" element={<CreateClass />} />  {/*Sudah responseive */}\
<Route path="/join/class" element={<JoinClass />} /> {/*Sudah responseive */}\
<Route path="/edit/myclass/id" element={<EditMyClass />} /> {/*Sudah responseive */}\

<Route path="/class/id/create/absent" element={<CreateAbsent />} /> {/*Sudah responseive */}\
<Route path="/class/id/edit/absent" element={<EditMyAbsent />} /> {/*Sudah responseive */}\

<Route path="/class/id/create/task/assigment" element={<CreateAssigment />} /> {/*Sudah responseive */}\
<Route path="/class/id/edit/task/assigment" element={<EditAssigment />} />  {/*Sudah responseive */}\

<Route path="/class/id/create/resource" element={<CreateResource />} />  {/*Sudah responseive */}\
<Route path="/class/id/edit/resource" element={<EditMyResource />} />  {/*Sudah responseive */}\

Buka [http://localhost:3000](http://localhost:3000) untuk melihatnya di browser Anda.\

Laman akan dimuat ulang saat Anda melakukan perubahan.\
Anda juga dapat melihat kesalahan serat di konsol.\
