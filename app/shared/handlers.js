module.exports = {

  SUCCESS (res, status, data = null, message = null) {
    const results = {};
    results.data = data;

    if (data) results.total = data.length;
    if (message) results.message = message;

    return res.status(status).json(results);
  },

  ERROR (res, err) {
    return res.status(500).json(err);
  },

  STOPPER (res) {
    return res.status(200).send('All is okay ;)');
  },

  ERROR_ON_VALIDATION (res, message) {
    return res.status(400).json({ message });
  },

  ERROR_ON_AUTH (res, message) {
    return res.status(401).json({ message });
  },

  ERROR_ON_PRIVILEGES (res) {
    return res.status(403).json({ message: 'access denied' });
  },

  ERROR_NOT_FOUND (res, message) {
    return res.status(404).json({ message });
  },

  ERROR_ON_DATABASE (res, err) {
    // const message = 'unexpected database error';
    // if ((err.code) === 'SQLITE_CONSTRAINT') {
    //   message = 'already exists, send unique data'
    // }
    return res.status(500).json({ err });
  }

};
