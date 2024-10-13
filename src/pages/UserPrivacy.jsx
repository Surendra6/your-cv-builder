const UserPrivacy = () => {
  return (
    <div className="bg-gray-50 flex flex-col">
      <header className="bg-blue-700 text-white py-8 shadow-md text-center">
        <h1 className="text-4xl font-bold">User Privacy & Data Control</h1>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {` No user data is stored on the app's servers. Instead, all user
            information is securely saved in the local browser storage, giving
            users complete control to manage or clear their data anytime. This
            ensures that your data remains private and under your control.`}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Clear Your Local Storage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {`If you'd like to clear all the data saved in your local storage,
            follow the steps below based on your browser:`}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>
              <strong>Google Chrome:</strong>{" "}
              {`Open Developer Tools (F12 or
              right-click and select "Inspect"), go to the "Application" tab,
              expand the "Local Storage" section, select the website, and click
              "Clear All" or remove individual items.`}
            </li>
            <li>
              <strong>Mozilla Firefox:</strong>{" "}
              {`Open Developer Tools (F12),
              navigate to the "Storage" tab, select "Local Storage," choose the
              website, and click "Delete All" or remove specific items.`}
            </li>
            <li>
              <strong>Microsoft Edge:</strong>{" "}
              {`Open Developer Tools (F12), go to
              the "Application" tab, find "Local Storage" under Storage, select
              the site, and clear the storage.`}
            </li>
            <li>
              <strong>Safari:</strong>{" "}
              {`Open "Preferences," go to the "Privacy"
              tab, click "Manage Website Data," select the website, and click
              "Remove" to clear the local storage.`}
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          All user data is stored locally. Manage your data for complete
          control.
        </p>
      </footer>
    </div>
  );
};

export default UserPrivacy;
