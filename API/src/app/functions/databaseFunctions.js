const fileReader = require('fs');
const { promisify } = require('util');
const error = require('../Exceptions/databaseExceptions');

module.exports = {
  async findById(key, table) {
    const tableObject = await _getcontentsTable(table);
    return tableObject.find(record => record.id === key);
  },
  async listActiveCalls(table) {
    const tableObject = await _getcontentsTable(table);
    return tableObject.filter(record => record.status !== 'call.finished');
  },
  async insert(record, table) {
    if (await _isExistTable(table)) {
      if (await _isValidRecord(record, table)) {
        // If it's a new Id...
        if (!(await this.findById(record.id, table))) {
          const tableObject = await _getcontentsTable(table);
          tableObject.push(record);
          if (await _setcontentsTable(tableObject, table)) {
            return { status: 0 };
          } else {
            return error.throwException(5);
          }
        } else {
          return error.throwException(3);
        }
      } else {
        return error.throwException(2);
      }
    } else {
      return error.throwException(1);
    }
  },
  async update(record, table) {
    if (await _isExistTable(table)) {
      if (await _isValidRecord(record, table)) {
        // If it's an existing Id...
        if (!!(await this.findById(record.id, table))) {
          const tableObject = await _getcontentsTable(table);
          const newTableObject = tableObject.map(item => {
            return item.id === record.id ? record : item;
          });

          if (await _setcontentsTable(newTableObject, table)) {
            return { status: 0 };
          } else {
            return error.throwException(5);
          }
        } else {
          return error.throwException(4);
        }
      } else {
        return error.throwException(2);
      }
    } else {
      return error.throwException(1);
    }
  },
  async delete(key, table) {
    const tableObject = await _getcontentsTable(table);
    const newTableObject = tableObject.filter(record => record.id !== key);
    if (await _setcontentsTable(newTableObject, table)) {
      return { status: 0 };
    } else {
      return error.throwException(5);
    }
  }
};

_isExistTable = async table =>
  await _isExistFile(`./src/database/${table}.json`);

_isValidRecord = async (record, table) => {
  const schema = `./src/database/schemas/${table}_SCHEMA.json`;
  if (!_isEmptyObject(record)) {
    // Validate the existence of a schema for the table.
    if (await _isExistFile(schema)) {
      const schemaStructure = await _openJsonFile(schema);
      return !_thereAreMissingAtributes(record, schemaStructure);
    } else {
      return true;
    }
  } else {
    return false;
  }
};

_getcontentsTable = async table =>
  await _openJsonFile(`./src/database/${table}.json`);

_setcontentsTable = async (newContents, table) =>
  await promisify(fileReader.writeFile)(
    `./src/database/${table}.json`,
    JSON.stringify(newContents)
  )
    .then(() => true)
    .catch(() => false);

_openJsonFile = async file =>
  await promisify(fileReader.readFile)(file)
    .then(content => JSON.parse(content))
    .catch(() => '');

_isExistFile = async file =>
  await promisify(fileReader.stat)(file)
    .then(() => true)
    .catch(() => false);

_isEmptyObject = object => Object.keys(object).length === 0;

_thereAreMissingAtributes = (record, schema) => {
  const missingAttributes = Object.keys(schema).filter(
    attributes => Object.keys(record).indexOf(attributes) === -1
  );
  return missingAttributes.length === 0 ? false : true;
};
