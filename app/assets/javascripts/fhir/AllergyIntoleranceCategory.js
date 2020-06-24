const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AllergyIntoleranceCategorySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'AllergyIntoleranceCategory' },
});

class AllergyIntoleranceCategory extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceCategorySchema);
    this._type = 'FHIR::AllergyIntoleranceCategory';
  }
};


module.exports.AllergyIntoleranceCategorySchema = AllergyIntoleranceCategorySchema;
module.exports.AllergyIntoleranceCategory = AllergyIntoleranceCategory;
