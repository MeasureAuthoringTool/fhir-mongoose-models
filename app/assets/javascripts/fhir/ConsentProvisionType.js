const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentProvisionTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ConsentProvisionType' },
});

class ConsentProvisionType extends mongoose.Document {
  constructor(object) {
    super(object, ConsentProvisionTypeSchema);
    this._type = 'FHIR::ConsentProvisionType';
  }
};


module.exports.ConsentProvisionTypeSchema = ConsentProvisionTypeSchema;
module.exports.ConsentProvisionType = ConsentProvisionType;
