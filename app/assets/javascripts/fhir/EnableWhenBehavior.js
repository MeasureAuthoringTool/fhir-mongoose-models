const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EnableWhenBehaviorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EnableWhenBehavior' },
  _type: { type: String, default: 'FHIR::EnableWhenBehavior' },
});

class EnableWhenBehavior extends mongoose.Document {
  constructor(object) {
    super(object, EnableWhenBehaviorSchema);
    this.typeName = 'EnableWhenBehavior';
    this._type = 'FHIR::EnableWhenBehavior';
  }
}

module.exports.EnableWhenBehaviorSchema = EnableWhenBehaviorSchema;
module.exports.EnableWhenBehavior = EnableWhenBehavior;
