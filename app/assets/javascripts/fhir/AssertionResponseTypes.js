const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AssertionResponseTypesSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AssertionResponseTypes' },
});

class AssertionResponseTypes extends mongoose.Document {
  constructor(object) {
    super(object, AssertionResponseTypesSchema);
    this._type = 'FHIR::AssertionResponseTypes';
  }
};


module.exports.AssertionResponseTypesSchema = AssertionResponseTypesSchema;
module.exports.AssertionResponseTypes = AssertionResponseTypes;
