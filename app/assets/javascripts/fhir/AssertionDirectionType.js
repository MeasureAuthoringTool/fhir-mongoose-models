const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AssertionDirectionTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AssertionDirectionType' },
});

class AssertionDirectionType extends mongoose.Document {
  constructor(object) {
    super(object, AssertionDirectionTypeSchema);
    this._type = 'FHIR::AssertionDirectionType';
  }
};


module.exports.AssertionDirectionTypeSchema = AssertionDirectionTypeSchema;
module.exports.AssertionDirectionType = AssertionDirectionType;
